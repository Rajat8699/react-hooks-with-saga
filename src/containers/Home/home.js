import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {users} from '../../services/actions/home'
import { bindActionCreators } from 'redux';

const Home =(props)=>{
    
    useEffect(() => {
      console.log('hey')
        props.users();
    }, [])
    
    return (
        <>
          {props.userresult &&
            props.userresult.data.map((items, key) => {
              return <h1 key={key}>{items.username}</h1>;
            })}
        </>
      );
    }

const mapDispatch = (dispatch) =>{
    return bindActionCreators({
        users
    }, dispatch)
}
const mapGetState = (state) =>{
    return {
      userresult: state.home.Users.data,
    };
}
export default connect(mapGetState, mapDispatch)(Home);
