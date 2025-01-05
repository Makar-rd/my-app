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

  useEffect(() => {
    // const appDiv = document.getElementById("form-control");
    // appDiv.innerHTML = `<div className="form-control">
    //     <label>
    //       phone:
    //       <input
    //         id="input-normal-mask"
    //         type="text"
    //         name="phone"
    //         placeholder="+7(000)000-00-00"
    //       />
    //     </label>
    //   </div>`;
    // const dock = document.getElementById("input-normal-mask");
    // dock.setAttribute("value", "formData.phone");
    // dock.setAttribute("onChange", "handleChange");
    // dock.setAttribute("onPaste", "handleChange");

    const inputNormalMask = document.getElementById("input-normal-mask");

    const normalMaskOptions = {
      mask: "+7(000)000-00-00",
    };

    const normalMask = IMask(inputNormalMask, normalMaskOptions);
    inputNormalMask.addEventListener("focus", () => {
      normalMask.updateOptions({ lazy: false });
    });

    inputNormalMask.addEventListener("blur", () => {
      normalMask.updateOptions({ lazy: true });
    });
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

    const phoneRegex = /^(\+7|8)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
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
        {/* <div id="app"></div> */}
        <div className="form-control">
          <label>
            phone:
            <input
              id="input-normal-mask"
              type="text"
              name="phone"
              placeholder="+7(000)000-00-00"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </div>
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
