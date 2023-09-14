import React, { useState } from 'react';
import axios from 'axios';


export default function RegistrationForm() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        address: '',
        dob: '',
        ssn: '',
        accountType: 'savings',
    });

    const [errors, setErrors] = useState({});
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [accountNumber, setAccountNumber] = useState(null);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.fullName.trim()) {
            errors.fullName = 'Full Name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!formData.contactNumber.trim()) {
            errors.contactNumber = 'Contact Number is required';
        }

        if (!formData.address.trim()) {
            errors.address = 'Address is required';
        }

        if (!formData.dob.trim()) {
            errors.dob = 'Date of Birth is required';
        }

        if (!formData.ssn.trim()) {
            errors.ssn = 'SSN is required';
        }

        setErrors(errors);

        // Check if there are no errors in the form
        return Object.keys(errors).length === 0;
    };

    const generateAccountNumber = () => {
        return Math.floor(Math.random() * 1000000000); // 9-digit account number
    };

    const resetForm = () => {
        setFormData({
            ...formData,
            fullName: '',
            email: '',
            contactNumber: '',
            address: '',
            dob: '',
            ssn: '',
            accountType: 'savings',
        });
        setRegistrationSuccess(false); // Reset registration success state
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = validateForm();

        if (isFormValid) {
            // Generate account number
            const accountNumber = generateAccountNumber();

            // Create a new user object with the form data
            const user = {
                ...formData,
                accountNumber,
                balance: 0,
            };

            try {
                await axios.post("http://localhost:3000/users", user);
                resetForm();
                setAccountNumber(accountNumber);
                setRegistrationSuccess(true);

            } catch (error) {
                console.error('Error:', error);
                // Handle registration failure here
            }
        }
    };

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className="text-center text-primary">Registration</h2>
                    {registrationSuccess && accountNumber !== null && (
                        <div className="alert alert-success">
                            Registration Successful. Your account number is {accountNumber}.
                        </div>
                    )}

                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder='enter your full name'
                                name="fullName"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange(e)}
                                className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                            />
                            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className='form-control'
                                id='email'
                                placeholder='enter your email'
                                name="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                            <input
                                type="text"
                                className='form-control'
                                id="contactNumber"
                                placeholder='enter your contact number'
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                type="text"
                                className='form-control'
                                id="address"
                                placeholder='enter your address'
                                name="address"
                                value={formData.address}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.address && <span className="error">{errors.address}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                            <input
                                type="date"
                                className='form-control'
                                id="dob"
                                placeholder='enter your date of birth'
                                name="dob"
                                value={formData.dob}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.dob && <span className="error">{errors.dob}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ssn" className="form-label">SSN</label>
                            <input
                                type="text"
                                className='form-control'
                                id="ssn"
                                placeholder='enter your ssn'
                                name="ssn"
                                value={formData.ssn}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.ssn && <span className="error">{errors.ssn}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="accountType" className="form-label">Account Type</label>
                            <select
                                id="accountType"
                                placeholder='select your account type'
                                name="accountType"
                                value={formData.accountType}
                                onChange={(e) => handleInputChange(e)}
                                className="form-select"
                            >
                                <option value="savings">Savings</option>
                                <option value="checking">Checking</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

