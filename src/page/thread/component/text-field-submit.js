import React from "react"

export class TextFieldSubmit extends React.Component {
    state = {
        value: ''
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.value)
        this.setState({
            value: ''
        })
    }

    render() {
        return (
          <div>
            <input
              onChange={this.onChange}
              value={this.state.value}
              type='text'
            />
            <button
              onClick={this.handleSubmit}
              type='submit'
            >
              Submit
            </button>
          </div>
        )
      }
}