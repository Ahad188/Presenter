 import './contact.css'

const Contact = () => {
     return (
          <section className="contack" id="contack">
          <div className="contanier">
               <div className="center">
                    <h3>Let's talk about everything</h3>
                    <p>Don't like forms? Send me an email.</p>
               </div>
               <div className="acton">
                    <form>
                         <input className='input' type="email" name="email" id="" placeholder="Enter a Email" required/>
                         <input className='btn ' type="submit" name="submit" id="" value="Send"/>
                    </form>
               </div>
          </div>
     </section>
     );
};

export default Contact;