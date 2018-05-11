import React, { Component } from "react";
import PropTypes from "prop-types"
import { Transition } from "react-transition-group"

import { H1, H2, H3, H4, P1, P2, P3} from "../Typography"
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";

const defaultStyle = {
  transition: `opacity 500ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

class Form extends Component {

  static propTypes = {
    textAreaHeight: PropTypes.number,
    formElementClassName: PropTypes.string,
  }

  state = {
    valid: false,
    submit: false,
    name: {
      value: "",
      valid: false,
      dirty: false
    },
    email: {
      value: "",
      valid: false,
      dirty: false
    },
    phone: {
      value: "",
      valid: false,
      dirty: false
    },
    notes: {
      value: "",
      valid: false,
      dirty: false
    },
    message: {
      value: "",
      valid: false,
      dirty: false
    }
  };

  handleChange = ({ target: { name, value, type, validity } }) => {
    const isFormValid = Object
      .entries(this.state)
      .filter(
        ([, {
          valid
        }]) => valid === false
      )

    console.log(isFormValid.length)
    
    this.setState({
      valid: isFormValid.length === 0  ? true : false,
      [name]: {
        value,
        valid: value ? true : false,
        dirty: true,
        validity
      } 
    })
    
  }

  handleBlur = ({ target: { name } }) => {
    this.setState({
      [name]: { 
        ...this.state[name],
        dirty: true 
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const isFormValid = Object
    .entries(this.state)
    .filter(
      ([, {
        valid
      }]) => valid === false
    )

    console.log(isFormValid)
    
    if (this.state.valid) {
      const formData = new FormData()
  
      for (let p in this.state) {
        formData.append(p, this.state[p].value)
      }
  
      fetch("http://localhost:8001/form.php", {
        method: "POST",
        mode: "no-cors",
        body: formData
      }).then(res => {
        console.log(res)
        this.setState({ submit: true })
      });
    }

  };

  render() {
    const { textAreaHeight, formElementClassName } = this.props
    
    return (
      !this.state.submit
        ? (
          <form className="flex flex-wrap justify-between px-6 sm:px12" action="/">
            <Input
              style={
                this.state.name.dirty && !this.state.name.valid 
                  ? { boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 30px 0px, 0 0 5px 0 red', color: 'red' } 
                  : { boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 30px 0px' }
              }
              name="name"
              value={this.state.name.value}
              required={true}
              placeholder="name*"
              className={formElementClassName ? formElementClassName : "w-full lg:w-8/25"}
              onChange={e => this.handleChange(e)}
              onBlur={(e) => this.handleBlur(e)}
            />
            <Input
              style={
                this.state.email.dirty && !this.state.email.valid 
                  ? { boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 30px 0px, 0 0 5px 0 red', color: 'red' } 
                  : { boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 30px 0px' }
              }
              name="email"
              value={this.email}
              required={true}
              type="email"
              pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
              placeholder="email*"
              className={formElementClassName ? formElementClassName : "w-full lg:w-8/25"}
              onChange={e => this.handleChange(e)}
              onBlur={(e) => this.handleBlur(e)}
            />
            <Input
              style={
                this.state.phone.dirty && !this.state.phone.valid 
                  ? { boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 30px 0px, 0 0 5px 0 red', color: 'red' } 
                  : { boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 30px 0px' }
              }
              name="phone"
              value={this.phone}
              required={true}
              type="tel"
              placeholder="phone*"
              pattern={/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/}
              className={formElementClassName ? formElementClassName : "w-full lg:w-8/25"}
              onChange={e => this.handleChange(e)}
              onBlur={(e) => this.handleBlur(e)}
            />
            <Textarea
              style={
                this.state.notes.dirty && !this.state.notes.valid 
                  ? { boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 30px 0px, 0 0 5px 0 red', color: 'red' } 
                  : { boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 30px 0px' }
              }
              name="notes"
              value={this.notes}
              required={true}
              placeholder="type of project*"
              className={formElementClassName ? formElementClassName : "w-full lg:w-48/100"}
              rows={textAreaHeight}
              onChange={e => this.handleChange(e)}
              onBlur={(e) => this.handleBlur(e)}
            />
            <Textarea
              style={
                this.state.message.dirty && !this.state.message.valid 
                  ? { boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 30px 0px, 0 0 5px 0 red', color: 'red' } 
                  : { boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 30px 0px' }
              }
              name="message"
              value={this.message}
              required={true}
              placeholder="project notes*"
              className={formElementClassName ? formElementClassName : "w-full lg:w-48/100"}
              rows={textAreaHeight}
              onChange={e => this.handleChange(e)}
              onBlur={(e) => this.handleBlur(e)}
            />
            <Button type="submit" onClick={e => this.handleSubmit(e)} className="mx-auto" primary>
              set an appointment
            </Button>
          </form>
        ) : (
          <Transition
            in={this.state.submit}
            timeout={500}
          >
            {state => (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >
                <H3 className="w-full text-center">Thanks! We'll be in touch soon</H3>
              </div>
            )}
          </Transition>
        )
    );
  }
}

export default Form;
