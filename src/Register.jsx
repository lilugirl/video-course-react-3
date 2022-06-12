import {useRef,forwardRef,useImperativeHandle} from 'react'
const Register = ({},ref) => {

  const usernameRef=useRef()
  const passwordRef=useRef()

  useImperativeHandle(ref,()=>{
    return {
      usernameRef,
      passwordRef
    }
  },[])
 
  return (
    <div>
      <form onSubmit={(e)=>{
          e.preventDefault()
      }}>
        <input name="username" placeholder="用户名"  ref={usernameRef} />
        <input name="password" type="password" ref={passwordRef} placeholder="密码" />
        <button onClick={()=>{
          
        }}>注册</button>
      </form>
    </div>
  );
};

export default forwardRef(Register);
