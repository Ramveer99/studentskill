const bcrypt=require('bcrypt')


 const comparePasswords = async (enteredPassword, storedHashedPassword) => {
    try {
      const match = await bcrypt.compare(enteredPassword, storedHashedPassword);
      return match;
    } catch (error) {
      throw error;
    }
  };

  module.exports = comparePasswords;

const hashPassword = async (password,roundpass) => {
    try {
      const hashedPassword = await bcrypt.hash(password, roundpass);
      console.log("bcrpyt pass", hashedPassword)
      return hashedPassword;
    } catch (error) {
      throw error;
    }
  };
 
  module.exports = hashPassword;

 