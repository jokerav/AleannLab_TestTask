// import React, { useEffect, useState } from 'react';

// class ListRenderer extends React.Component {
//
//   state = {
//     event: null
//   };
//   componentDidUpdate (prevProps, prevState) {
//     if (prevProps.event !== this.props.event){
//       window.addEventListener('message', (e) => this.setState({ event: e }))
//     }
//   }
//   render () {
//     return this.state.event;
//   }
// }
// export default ListRenderer
// const ListRenderer = ()=>{
//   const [event, setEvent] = useState(null);
//   useEffect(
//     ()=>{window.addEventListener('message', e=> setEvent( e ))},
//     [event]
//   )
//     return this.state.event;
//
// }
// export default ListRenderer
