import React, {MouseEvent} from 'react'

const callback = () => {
    alert("hey")
}

window.setTimeout(callback, 1000)


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(       event.currentTarget.name)
    }

    const onNameChange = () => {
        console.log("name changed")
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }
    return (
        <div>
                <textarea
                    onChange={onNameChange}
                    onBlur={focusLostHandler}
                >Prohor
                </textarea>
            <input/>
            <button name="delete" onClick={deleteUser}>delete</button>
        </div>
    )
}

export default User