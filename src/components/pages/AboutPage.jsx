import React from 'react'
import Card from '../shared/Card'
import {Link} from 'react-router-dom';
function AboutPage() {
  return (
      <Card>
    <div className="about">
        <h1>About this Project</h1>
        <p>This is a react app to leave feedback about product or servicec</p>

        <p>Version 1.0.0</p>
        <p>
            <Link to='/'> Back to home</Link>
        </p>
    </div>
    </Card>
  )
}

export default AboutPage