import Subservices from "./SubServices";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title first="Our" second="services" />
      <div className="section-center services-center">
        <Subservices
          iconClass="fas fa-wallet fa-fw"
          title="saving money"
        ></Subservices>

        <Subservices
          iconClass="fas fa-tree fa-fw"
          title="endless hiking"
        ></Subservices>

        <Subservices
          iconClass="fas fa-socks fa-fw"
          title="amazing comfort"
        ></Subservices>
      </div>
    </section>
  );
};

export default Services;
