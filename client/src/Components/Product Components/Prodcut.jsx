import { Button } from 'antd'
import React, { useState } from 'react'

const Prodcut = () => {
    const options = ['Select','Mobile','Laptops','cars','bikes','Homies','chargers','accessories','electronics','other'];
const [formData,setFormData] = useState({
    name:"",
    desc:"",
    price:"",
    category:"",
    bill:false,
    box:false,
    warranty:false
})

const handleChange = (e) => {
    const { name, value,type,checked} = e.target;
if(type === "checkbox"){
    if(checked){
        setFormData({
            ...formData,
            [name] : value
        })
    }
}
setFormData({
    ...formData,
    [name]: value
});

}
const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
        name: "",
        desc: "",
        price: "",
        category: "",
        bill: false,
        box: false,
        warranty: false,
      });
}
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className='col-10'>form</div>
                    <div className='col-2'>
                        <Button data-bs-toggle="modal" data-bs-target="#exampleModal" >Add Product</Button>
                    </div>
                </div>
            </div>
            <div class="modal fade center" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold theme-color" id="exampleModalLabel">Product Details</h1>
                        </div>
                        <div class="modal-body">
                            <form className='form-group' >
                                <label>Name of Product</label>
                                <input type="text" className='form-control' name='name' value={formData.name} onChange={handleChange}/>
                                <label htmlFor="desc">Description of Product</label>
                                <input type="text" className='form-control' name='desc' value={formData.desc} onChange={handleChange} />

                                <div className="row">
                                    <div className="col">
                                        <label>Price of Product</label>
                                        <input type="Number" className='form-control' name='price' value={formData.price} onChange={handleChange}/>
                                    </div>
                                    <div className="col">
                                        <label>Category of Product</label>
                                        <select className='form-control' name='category' value={formData.category} onChange={handleChange}>
                                            {options.map((e)=>{
                                                return (
                                                    <option value={e} key={e} >{e}</option>
                                                )
                                            })}
                                            
                                        </select>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheck1"  name='bill' checked={formData.bill} onChange={handleChange} />
                                            <label class="form-check-label" for="flexSwitchCheck1">Bill Available</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheck2"  name='box' checked={formData.box} onChange={handleChange}/>
                                            <label class="form-check-label" for="flexSwitchCheck2">Box Available</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheck3"  name='warranty' checked={formData.warranty}  onChange={handleChange}/>
                                            <label class="form-check-label" for="flexSwitchCheck3">warranty Availble</label>
                                        </div>
                                    </div>
                    
                                </div>

                            </form>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-outline-danger" onClick={handleSubmitForm}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prodcut