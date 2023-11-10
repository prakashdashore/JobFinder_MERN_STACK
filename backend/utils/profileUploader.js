var ImageKit = require("imagekit");



// haya pe tum pane credencial dalna 😎
exports.profileUploader = (req, res, next) => {
  var imagekit = new ImageKit({
    publicKey: "public_nb4eJEnWo2TBAaVlZFvxsgtjWUI=", 
    privateKey: "private_vfSyk3TDbW+O7jwqmtkrwY/9eR0=",
    urlEndpoint: "https://ik.imagekit.io/3ptfzzysr",
  });
  return imagekit;
};
