import React from 'react';
import PermanentDrawer from './PermanentDrawer';
import {Routes, Route} from 'react-router-dom';
import Pending from './Pending';
import Approved from './Approved';
import Rejected from './Rejected';
import CreateBranchManager from './CreateBranchManager';


function AdminPanel() {
  
  return (
    <div>
      <PermanentDrawer />

      <Routes>
        <Route path="pending" element={<Pending />}/>
        <Route path="approved" element={<Approved />}/>
        <Route path="rejected" element={<Rejected />}/>
        <Route path="createbranchmanager" element={<CreateBranchManager />}/>
      </Routes>
      
    </div>
  )
}

export default AdminPanel
