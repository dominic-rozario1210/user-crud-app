import React, { useState } from 'react'

const UserCard = ({ user, onDelete, onUpdate }) => {

    const [isEditing, setIsEditing] = useState(false);

    const [editUser, setEditUser] = useState({
        name: user.name,
        age: user.age,
        email: user.email,
        mobileNum: user.mobileNum
    });

    const handleChange = (e) => {
        setEditUser({
            ...editUser,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = () => {
        onUpdate({
            id: user.id,
            ...editUser
        });

        setIsEditing(false);
    };

    return (

        <div className="user-wrapper">

            {/* USER CARD */}

            <div className="card-list">

                <div className="display-content">

                    <h4>Name: {user.name}</h4>

                    <p>Age: {user.age}</p>

                    <p>Email: {user.email}</p>

                    <p>Mobile: {user.mobileNum}</p>

                    <div className="button-group">

                        <button
                            className="edit-btn"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>

                        <button
                            className="delete-btn"
                            onClick={() => onDelete(user.id)}
                        >
                            Delete
                        </button>

                    </div>

                </div>

            </div>


            {/* EDIT CARD */}

            {isEditing && (

                <div className="edit-container">

                    <input
                        type="text"
                        name="name"
                        value={editUser.name}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="age"
                        value={editUser.age}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        value={editUser.email}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="mobileNum"
                        value={editUser.mobileNum}
                        onChange={handleChange}
                    />

                    <div className="button-group">

                        <button
                            className="update-btn"
                            onClick={handleUpdate}
                        >
                            Update
                        </button>

                        <button
                            className="cancel-btn"
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>

                    </div>

                </div>

            )}

        </div>
    )
}

export default UserCard