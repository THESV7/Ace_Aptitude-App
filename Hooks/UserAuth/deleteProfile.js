import { BASE_URL } from '@env';
const useDeleteProfile = ()=>{

    const deleteProfile = async(id)=>{
        try {
            const response = await fetch(`https://ace-aptitude-new.onrender.com/api/delete-profile-cloudnary/${id}`,{
                method: 'DELETE'
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log("error" , error)
        }
    }

    return{
        deleteProfile
    }
}

export default useDeleteProfile;