import React, { Component } from "react";
import Input from "../Input";
import Button from "../Button";

class Form extends Component {
  state = {
    name: "tyler",
    email: "tdreitz@gmail.com",
    phone: "818-424-6393",
    message: "holle wlord"
  };

  handleChange = (e, key) => this.setState({ [key]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData()

    for (let p in this.state) {
      formData.append(p, this.state[p])
    }

    fetch("http://localhost:8001/form.php", {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).then(res => console.log(res));
  };

  render() {
    return (
      <form className="flex flex-wrap justify-between px-6 sm:px12" action="/">
        <Input
          value={this.name}
          onChange={e => this.handleChange(e, "name")}
          placeholder="name*"
          className="w-full lg:w-8/25"
        />
        <Input
          value={this.email}
          onChange={e => this.handleChange(e, "email")}
          type={"email"}
          placeholder="email*"
          className="w-full lg:w-8/25"
        />
        <Input
          value={this.phone}
          onChange={e => this.handleChange(e, "phone")}
          placeholder="phone*"
          className="w-full lg:w-8/25"
        />
        <Input placeholder="type of project*" className="w-full lg:w-48/100" />
        <Input
          onChange={e => this.handleChange(e, "message")}
          value={this.message}
          placeholder="project notes*"
          className="w-full lg:w-48/100"
        />
        <Button onClick={e => this.handleSubmit(e)} className="mx-auto" primary>
          set an appointment
        </Button>
      </form>
    );
  }
}

export default Form;
