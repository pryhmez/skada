import React, { useContext, useEffect } from 'react';
import AuthContext from "../../Context/auth/authContext";

const Send = (props) => {
  console.log(props.orderDet)
  const authContext = useContext(AuthContext);
    const {user :{user}} = authContext;
    const { businessName:sendersName, email:sendersEmail, businessPhone: sendersPhone, _id: sendersId, } = user
  const { recieversEmail, recieversName, recieversPhone } = props.orderDet;

        return ( 
            <div className="send-cont">
                <div className="send">
                <div className='pick'>
                    <div className="pic">
                                <div style={{display:'flex',alignItems:'flex-start'}}>
                                    <i style={{color:"#2F80ED",marginRight:'15px',marginTop:'4px'}}className="fas fa-user"></i>
                                    <div>
                                        <aside style={{fontSize:'18px',fontWeight:'bold'}}>Sender Information</aside>
                                        <aside style={{fontWeight:'600'}}>{sendersName}</aside>
                                        <aside>
                                            <aside style={{color:'#C4C4C4',fontSize:'0.7rem'}}>   
                                                 {sendersEmail}
                                            </aside>
                                            <aside style={{color:'#C4C4C4',fontSize:'0.8rem'}}>
                                                {sendersPhone}
                                            </aside>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                            <div style={{flex:'1'}}/>
                            <div className="pic">
                                <div style={{display:'flex',alignItems:'flex-start'}}>
                                    <i style={{color:"#2F80ED",marginRight:'15px',marginTop:'4px'}}className="fas fa-user"></i>
                                    <div>
                                        <aside style={{fontSize:'18px',fontWeight:'bold'}}>Receviers Information</aside>
                                        <aside style={{fontWeight:'600'}}>{recieversName}</aside>
                                        <aside>
                                            <aside style={{color:'#C4C4C4',fontSize:'0.7rem'}}>   
                                                 {recieversEmail}
                                            </aside>
                                            <aside style={{color:'#C4C4C4',fontSize:'0.8rem'}}>
                                                 {recieversPhone}
                                            </aside>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
         );
}
 
export default Send;