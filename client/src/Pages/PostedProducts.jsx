import React from 'react'
import {Tabs} from 'antd'
import Prodcut from '../Components/Product Components/Prodcut'
const PostedProducts = () => {
  return (
    <>
        <div className="container">
        <Tabs defaultActiveKey='1' size="large">
        <Tabs.TabPane key='1' tab='buy'color='' >
         <Prodcut />
        </Tabs.TabPane>

        <Tabs.TabPane key='2' tab='bids'>
        
        </Tabs.TabPane>
        <Tabs.TabPane key='3' tab='General'>
        
        </Tabs.TabPane>
            </Tabs>
        </div>
    </>
  )
}

export default PostedProducts