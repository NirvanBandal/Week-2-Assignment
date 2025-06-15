import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    gender: '',
    country: '',
    terms: false,
  });

  const [msg, setMsg] = useState('');
  const [errors, setErrors] = useState({});

  const change = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === 'checkbox' ? checked : value });
  };

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!data.name) err.name = 'Name required';
    if (!data.email) err.email = 'Email required';
    if (!data.password) err.password = 'Password required';
    if (data.password !== data.confirm) err.confirm = 'Passwords do not match';
    if (!data.gender) err.gender = 'Select gender';
    if (!data.country) err.country = 'Select country';
    if (!data.terms) err.terms = 'Agree to terms';
    setErrors(err);

    if (Object.keys(err).length === 0) {
      console.log(data);
      setMsg('Form submitted!');
      setData({ name: '', email: '', password: '', confirm: '', gender: '', country: '', terms: false });
    } else {
      setMsg('');
    }
  };

  return (
    <div className="box">
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input name="name" placeholder="Full Name" value={data.name} onChange={change} />
        {errors.name && <p>{errors.name}</p>}

        <input name="email" type="email" placeholder="Email" value={data.email} onChange={change} />
        {errors.email && <p>{errors.email}</p>}

        <input name="password" type="password" placeholder="Password" value={data.password} onChange={change} />
        {errors.password && <p>{errors.password}</p>}

        <input name="confirm" type="password" placeholder="Confirm Password" value={data.confirm} onChange={change} />
        {errors.confirm && <p>{errors.confirm}</p>}

        <div>
          <label><input type="radio" name="gender" value="Male" checked={data.gender === 'Male'} onChange={change} /> Male</label>
          <label><input type="radio" name="gender" value="Female" checked={data.gender === 'Female'} onChange={change} /> Female</label>
        </div>
        {errors.gender && <p>{errors.gender}</p>}

        <select name="country" value={data.country} onChange={change}>
          <option value="">Select Country</option>
          <option>India</option>
          <option>USA</option>
        </select>
        {errors.country && <p>{errors.country}</p>}

        <label>
          <input type="checkbox" name="terms" checked={data.terms} onChange={change} />
          I agree to terms
        </label>
        {errors.terms && <p>{errors.terms}</p>}

        <button>Submit</button>
        {msg && <h4>{msg}</h4>}
      </form>
    </div>
  );
}

export default App;
