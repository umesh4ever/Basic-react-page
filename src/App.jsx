import React from 'react'
import Section1 from './components/sec1/Section1'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Satisfied',
      color: 'royalblue'
    },
    {
      img: 'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Underserved',
      color: 'lightseagreen'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Underbanked',
      color: 'orange'
    },
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Underbanked',
      color: 'pink'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Underbanked',
      color: 'black'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App 