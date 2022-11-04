app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
  });
  
  app.put('/dishes/:dishId', (req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
          ' with details: ' + req.body.description);
  });
  
  app.delete('/dishes/:dishId', (req, res, next) => {
      res.end('Deleting dish: ' + req.params.dishId);
  });