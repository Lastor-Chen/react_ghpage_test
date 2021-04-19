import React from 'react'

class Page1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { foo: '' }
  }

  render() {
    return (
      <h1>Page 1</h1>
    )
  }
}

export default Page1