const KEYS ={
    services:'services',
    serviceId:'employeeId'
}


export function insertService(data) {
    let employees=getAllServices();
    data['id'] = generateServiceId()
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

export function getAllServices() {
    if (localStorage.getItem(KEYS.services) == null)
        localStorage.setItem(KEYS.services, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.services));
}