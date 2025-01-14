import React, { useEffect, useState } from "react";
import IMask from "imask";

const Form = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    email: "",
    phone: "",
    checkbox: false,
  });
  const [errors, setErrors] = useState({});
  const [text, setText] = useState(false);
  const [isCheked, setIscheked] = useState(formData.checkbox);

  const maskOptions = {
    mask: "+{7}(000)000-00-00",
    lazy: false,
  };

  useEffect(() => {
    const phone = document.querySelectorAll('input[name="phone"]');
    for (let i = 0; i < phone.length; i++) {
      new IMask(phone[i], maskOptions);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    console.log("handlechange", formData);
    if (
      !formData.login ||
      formData.login.length < 2 ||
      formData.login.length > 20
    ) {
      newErrors.login = "Логин должен быть от 2 до 20 символов";
    }

    let passwordErrors = [];

    if (!formData.password) {
      passwordErrors.push("Пароль должен быть заполнен");
    } else {
      if (formData.password.length < 8 || formData.password.length > 20) {
        passwordErrors.push("Длина пароля должна быть от 8 до 20 символов");
      }
      if (!/[A-Z]/.test(formData.password)) {
        passwordErrors.push(
          "Пароль должен содержать хотя бы одну заглавную букву"
        );
      }
      if (!/[a-z]/.test(formData.password)) {
        passwordErrors.push(
          "Пароль должен содержать хотя бы одну строчную букву"
        );
      }
      if (!/\W/.test(formData.password)) {
        passwordErrors.push(
          "Пароль должен содержать хотя бы один специальный символ"
        );
      }
    }

    if (passwordErrors.length > 0) {
      newErrors.password = passwordErrors.join(". ");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }

    const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    const phone = document.querySelectorAll('input[name="phone"]');

    if (!phone[0].value || !phoneRegex.test(phone[0].value)) {
      newErrors.phone = "Некорректный номер телефона";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setText(true);
    } else {
      setText(false);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    console.log("name:", name);
    console.log("value:", value);
    console.log("type:", type);

    setIscheked(checked);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  console.log("formdata", formData);

  return (
    <div className="container">
      <div style={{ display: text ? "" : "none" }}>
        <div>Данные сохранились успешно</div>
      </div>
      <form onSubmit={handleSubmit} id="form">
        <div className="form-control">
          <label>
            login:
            <input
              type="text"
              name="login"
              placeholder="login"
              autoComplete="off"
              //   pattern="[A-Za-zА-Яа-яЁё]{2,20}"
              //   title="Логин должен быть от 2 до 20 символов"
              onPaste={handleChange}
              value={formData.login}
              onChange={handleChange}
            />
          </label>
          {errors.login && (
            <span className="form-control-error">{errors.login}</span>
          )}
        </div>
        <div className="form-control">
          <label>
            password:
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="off"
              //   pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{8,20}$"
              //   title="Пароль должен быть от 8 до 20 символов, содержать минимум одну заглавную букву, одну строчную букву и один специальный символ"
              value={formData.password}
              onChange={handleChange}
              onPaste={handleChange}
            />
          </label>
          {errors.password && (
            <span className="form-control-error">{errors.password}</span>
          )}
        </div>
        <div className="form-control">
          <label>
            email:
            <input
              type="email"
              name="email"
              placeholder="email"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              onPaste={handleChange}
            />
          </label>
          {errors.email && (
            <span className="form-control-error">{errors.email}</span>
          )}
        </div>
        <input
          id="phone"
          type="text"
          name="phone"
          placeholder="+7(000)000-00-00"
          onKeyUp={handleChange}
        />
        {errors.phone && (
          <span className="form-control-error">{errors.phone}</span>
        )}
        <div className="form-checkbox">
          <label htmlFor="subscribeCheckbox">Остаться в системе</label>
          <input
            id="subscribeCheckbox"
            type="checkbox"
            name="checkbox"
            checked={isCheked}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
