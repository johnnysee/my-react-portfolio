import React from 'react'
import { Component } from 'react';
import { Container, Icon } from 'semantic-ui-react'

const encode = (data) => {
  return Object.keys(data)
  .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  .join("&");
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: ""};
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded"},
      body: encode({ "form-name": "contact", ...this.state}),
    })
    .then(() => alert("Success!"))
    .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value});

  render() {
    const { name, email, message} = this.state;
    return (
      <Container>
      <a
      href="https://www.linkedin.com/in/johnny-see/"
      rel="nofollow noreferrer"
      target="_blank">
      <Icon name="linkedin" size="big" />
      {" "}
      </a>
      <a
      href="https://github.com/johnnysee"
      rel="nofollow noreferrer"
      target="_blank">
      <Icon name="github" size="big" />
      {" "}
      </a>

      <form onSubmit={this.handleSubmit} netlify name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Your Name:
          <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Your Email:
          <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          />
        </label>
      </p>
      <p>
        <label>
        Message:
          <input
          name="message"
          value={message}
          onChange={this.handleChange}
          />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
      </form>
      </Container>
    )
  }
}

export default ContactForm;
