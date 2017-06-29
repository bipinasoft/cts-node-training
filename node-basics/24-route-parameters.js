const express = require('express');

const app = express();

app.get('/employee/:id/projects/:project_id', function(req, res) {
    const employeeId = req.params.id;
    const projectId = req.params.project_id;
    
    res.send('Employee details page ' + employeeId + ' and project id : ' + projectId);
});

app.listen(3000);