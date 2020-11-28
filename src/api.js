
const API_URL = '/api/todos/';

export async function createTask(listId, task) { // ??
    return fetch(API_URL, {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            title: task.title,
            listId,
            category: task.category
        })
    })
    .then(resp => {
    if(!resp.ok) {
        if(resp.status >= 400 && resp.status < 500) {
        return resp.json()
        .then(data => {
            let error = {errorMessage: data.message};
            throw error;
        });
        } 
        else {
        let error = {errorMessage: 'Please try again later, server is not responding'}
        throw error; 
        }
    }
    return resp.json()
    })
}

export async function getTasks() {
    return fetch(API_URL)
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >= 400 && resp.status < 500) {
          return resp.json()
          .then(data => {
            let error = {errorMessage: data.message};
            throw error;
          });
        } 
        else {
          let error = {errorMessage: 'Please try again later, server is not responding'}
          throw error; 
        }
      }
      return resp.json()
    })
}

export async function removeTask(id) {
    const deleteURL = API_URL + id;
    return fetch(deleteURL, {
      method: 'delete',
    })
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >= 400 && resp.status < 500) {
          return resp.json()
          .then(data => {
            let error = {errorMessage: data.message};
            throw error;
          });
        } 
        else {
          let error = {errorMessage: 'Please try again later, server is not responding'}
          throw error; 
        }
      }
      return resp.json()
    })
}

export async function updateCategory(task) {
    var newCategory = (task.category+1)%7; // modulo number of categories +1 (categories are 1-indexed)

    const updateURL = API_URL + task._id;

    return fetch(updateURL, {
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        category: newCategory
      })      
    })
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >= 400 && resp.status < 500) {
          return resp.json()
          .then(data => {
            let error = {errorMessage: data.message};
            throw error;
          });
        } 
        else {
          let error = {errorMessage: 'Please try again later, server is not responding'}
          throw error; 
        }
      }
      return resp.json()
    })    
}

export async function moveTask(task, listId) {

    const updateURL = API_URL + task._id;

    return fetch(updateURL, {
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        listId: listId,
        selected: false
      })      
    })
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >= 400 && resp.status < 500) {
          return resp.json()
          .then(data => {
            let error = {errorMessage: data.message};
            throw error;
          });
        } 
        else {
          let error = {errorMessage: 'Please try again later, server is not responding'}
          throw error; 
        }
      }
      return resp.json()
    })
}