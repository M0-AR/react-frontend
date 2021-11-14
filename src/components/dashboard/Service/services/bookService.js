// import axios from 'axios'

const KEYS ={
    services:'services',
    serviceId:'employeeId'
}

// const baseUrl = process.env.NODE_ENV === '' ? // development
//     "http://localhost:10000/":"https://api.comit.dev/"; // Check if dev environment

// export function insertService(data) {
//     //data['id'] = generateServiceId()
//     let services=getAllServices();
//     services.push(data)
//     axios.post(baseUrl + "api/v1/go-mongo/dashboard/add", data)
//           .then(res=> {
//               console.log(res)
//           })
//           .catch(err=>{
//               console.log(err)
//           })
//     localStorage.setItem(KEYS.services,JSON.stringify(services))
// }
export function insertService(data) {
    data['id'] = generateServiceId()
    let employees=getAllServices();
    employees.push(data)
    localStorage.setItem(KEYS.services,JSON.stringify(employees))
}

export function generateServiceId() {
    if (localStorage.getItem(KEYS.serviceId) == null)
        localStorage.setItem(KEYS.serviceId, '0')
    var id = parseInt(localStorage.getItem(KEYS.serviceId))
    localStorage.setItem(KEYS.serviceId, (++id).toString())
    return id;
}

export function updateService(data) {
    let services = getAllServices();
    let recordIndex = services.findIndex(x => x.id === data.id);
    services[recordIndex] = { ...data }
    localStorage.setItem(KEYS.services, JSON.stringify(services));
}

export function deleteService(id) {
    let services = getAllServices();
    services = services.filter(x => x.id !== id);
    localStorage.setItem(KEYS.services, JSON.stringify(services));
}

// export function getAllServices() {
//     //cleanLocalStoarge()
//     if (localStorage.getItem(KEYS.services) == null) {
//         axios.get(baseUrl + "api/v1/go-mongo/dashboard/list")
//           .then(res=> {
//               console.log(res.data.services)
//               localStorage.setItem(KEYS.services, JSON.stringify(res.data.services))
//           })
//           .catch(err=>{
//               console.log(err)
//           })
//     } 
//     return JSON.parse(localStorage.getItem(KEYS.services));
// }
export function getAllServices() {
    if (localStorage.getItem(KEYS.services) == null)
        localStorage.setItem(KEYS.services, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.services));
}

// function cleanLocalStoarge() {
//         localStorage.clear()
// }