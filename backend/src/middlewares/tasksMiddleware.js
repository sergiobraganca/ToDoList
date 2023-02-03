/* eslint-disable linebreak-style */
const validarTitulo = (request, response, next) => {
  const { body } = request;
  if (body.title === undefined) {
    return response.status(400).json({message: 'O campo titulo é obrigatório - the field "title" is required'});
  }

  if (body.title === '') {
    return response.status(400).json({ message: 'O campo titulo não pode ser vazio - title cannot be empty'});
  }

  next();
};

const validarStatus = (request, response, next) => {
  const { body } = request;
  if (body.status === undefined) {
    return response.status(400).json({message: 'O campo status é obrigatório - the field "status" is required'});
  }

  if (body.status === '') {
    return response.status(400).json({ message: 'O campo status não pode ser vazio - status cannot be empty'});
  }

  next();
};



module.exports = {
  validarTitulo,
  validarStatus
};
