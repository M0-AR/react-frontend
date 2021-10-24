const KEYS ={
    services:'services',
    serviceId:'employeeId'
}


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

export function getAllServices() {
    if (localStorage.getItem(KEYS.services) == null)
        localStorage.setItem(KEYS.services, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.services));
}