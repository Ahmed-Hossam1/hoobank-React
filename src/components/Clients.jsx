import { clients } from "../constants/Constant"
const Clients = () => {
  return (
    <section id="Clients" className="pt-20">
      <div className="container">
        <div className='Clients md:flex-wrap md:flex gap-20 justify-between items-center'>
         {
            clients.map((client)=> (
              <div className="client flex-1">
              <img src={client.logo} alt="img"  className="h-[60px] object-contain mb-10 md:mb-0 "/>
              </div>
            ))
         }
        </div>
      </div>
    </section>
    )
}

export default Clients