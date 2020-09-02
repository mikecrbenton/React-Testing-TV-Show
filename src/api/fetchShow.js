
 import axios from 'axios'

 // fetchShow() returns the axios data when it is called - it is essentially
 // a wrapper for axios

 export const fetchShow = () => {
   return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
     .then( res => { return res} )
     .catch( err => { return err} )
 }