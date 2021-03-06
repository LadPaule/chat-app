const MyMessage = (message) => {
  if( message?.attachements?.length > 0 ){
    return(
      <img 
        src={message.attachements[0].file}
        alt="message-attchment"
        className="message-image"
        style={{float: 'right'}}
      />
    )
  }
  return (  
    <div className="message" style={{float: 'right', marginRight: '18px', color: 'white', backgroundCOlor: '#3b2a50'}}>
      {message.text}
    </div>
  );
}
 
export default MyMessage;