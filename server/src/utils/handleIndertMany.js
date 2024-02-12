const handleInsertMany = async (body, model) => {
  if (!Array.isArray(body)) return false;
  const created = await model.insertMany(body);
  return created;
};


module.exports = {handleInsertMany};