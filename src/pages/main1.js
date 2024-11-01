import React, { useState, useEffect } from 'react'; 
 
const MyForm = () => { 
    const [formData, setFormData] = useState({ 
        number1: '', 
        number2: '', 
        checkbox: false, 
        text: '', 
        time: '', 
    }); 
 
    const [errors, setErrors] = useState({}); 
    const [submittedData, setSubmittedData] = useState(null); 
 
    useEffect(() => { 
        if (submittedData) { 
            alert(JSON.stringify(submittedData)); 
        } 
    }, [submittedData]); 
 
    const validate = () => { 
        const newErrors = {}; 
        if (formData.number1.length < 5) { 
            newErrors.number1 = 'Поле должно содержать не менее 5 цифр.'; 
        } 
        if (formData.number2.length > 8) { 
            newErrors.number2 = 'Поле не должно превышать 8 цифр.'; 
        } 
        if (!formData.text) { 
            newErrors.text = 'Это поле не может быть пустым.'; 
        } 
        if (!formData.time) { 
            newErrors.time = 'Выберите время.'; 
        } 
        return newErrors; 
    }; 
 
    const handleChange = (e) => { 
        const { name, value, type, checked } = e.target; 
        setFormData({ 
            ...formData, 
            [name]: type === 'checkbox' ? checked : value, 
        }); 
    }; 
 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        const validationErrors = validate(); 
        if (Object.keys(validationErrors).length > 0) { 
            setErrors(validationErrors); 
            return; 
        } 
        setErrors({}); 
        setSubmittedData(formData); 
    }; 
 
    return ( 
        <div style={{ width: '300px', margin: 'auto', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}> 
            <form onSubmit={handleSubmit}> 
                <div> 
                    <label> 
                        <strong>Число 1 (не менее 5 цифр)</strong> 
                        <input type="text" name="number1" value={formData.number1} onChange={handleChange} /> 
                    </label> 
                    {errors.number1 && <p style={{ color: 'red' }}>{errors.number1}</p>} 
                </div> 
 
                <div> 
                    <label> 
                        <strong>Число 2 (максимум 8 цифр)</strong> 
                        <input type="text" name="number2" value={formData.number2} onChange={handleChange} /> 
                    </label> 
                    {errors.number2 && <p style={{ color: 'red' }}>{errors.number2}</p>} 
                </div> 
 
                <div> 
                    <label> 
                        <strong>Мультивыбор</strong> 
                        <input type="checkbox" name="checkbox" checked={formData.checkbox} onChange={handleChange} />  
                    </label> 
                </div> 
 
                <div> 
                    <label> 
                        <strong>Текст</strong> 
                        <input type="text" name="text" value={formData.text} onChange={handleChange} /> 
                    </label> 
                    {errors.text && <p style={{ color: 'red' }}>{errors.text}</p>} 
                </div> 
 
                <div> 
                    <label> 
                    <strong>Время</strong> 
                        <input type="time" name="time" value={formData.time} onChange={handleChange} /> 
                    </label> 
                    {errors.time && <p style={{ color: 'red' }}>{errors.time}</p>} 
                </div> 
 
                <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', marginTop: '20px' }}>Отправить</button> 
            </form> 
        </div> 
    ); 
}; 
 
export default MyForm;