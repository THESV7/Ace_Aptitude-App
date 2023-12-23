const useDeleteProfile = ()=>{

    const deleteProfile = async(id)=>{
        try {
            const response = await fetch(`http://192.168.0.103:5000/api/delete-profile-cloudnary/${id}`,{
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