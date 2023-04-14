

export const setToken = (name, data)=>{
    localStorage.setItem(`${name}`, JSON.stringify(data));
}

export const getToken = (name)=>{
    localStorage.getItem(name);
}

export const delToken = (name)=>{
    localStorage.removeItem(name);
}

export const reToken = (name)=>{

}
