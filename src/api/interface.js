import axios from 'axios'
import qs from 'qs'

function getData(_url,_data){
    return axios.get(_url,{
        params:_data || {}
    }).then(res=>{
        return Promise.resolve(res.data)
    }).catch(err=>{
        return Promise.resolve(err)
    })
}

export function getNewsList(){
    return getData('/api/news/latest')
}