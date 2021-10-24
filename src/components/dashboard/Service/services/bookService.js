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

export function updateService(data) {
    let services = getAllServices();
    let recordIndex = services.findIndex(x => x.id == data.id);
    services[recordIndex] = { ...data }
    localStorage.setItem(KEYS.employees, JSON.stringify(services));
}

export function getAllServices() {
    if (localStorage.getItem(KEYS.services) == null)
        localStorage.setItem(KEYS.services, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.services));
}

export function generateServiceId() {
    if (localStorage.getItem(KEYS.serviceId) == null)
        localStorage.setItem(KEYS.serviceId, '0')
    var id = parseInt(localStorage.getItem(KEYS.serviceId))
    localStorage.setItem(KEYS.serviceId, (++id).toString())
    return id;
}

