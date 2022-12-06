

const callback = () => {
    alert("hey")
}

window.setTimeout(callback, 1000)


export const User = () => {

    const deleteUser =()=>{
        alert("user should be deleted")
    }

    const saveUser =()=>{
        alert("user have been saved")

    }
    return (
        <div>
            Prohor
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}

export default User