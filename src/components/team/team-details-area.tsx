import { social_data } from "../../data/socials";
import { ITeamDT } from "../../types/team-d-t";


export default function TeamDetailsArea({team}:{team:ITeamDT}) {
  
  return (
    <div className="team-details-page-area space">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="team-inner-thumb mb-lg-0 mb-40">
              <img
                className="w-100"
                src={team.imageSrc}
                // src="/assets/img/team/team-details1-1.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-details-about-info mb-0">
              <h2 className="sec-title mb-3">{team.name}</h2>
              <h4 className="team-desig">{team.designation}</h4>
              <p className="sec-text mt-30">
                BaseCreate is pleased to announce that it has been commissioned
                by Leighton Asia reposition its brand. We will help Leighton
                Asia evolve its brand strategy, and will be responsible updating
                Leighton Asia’s brand identity, website, and other collaterals.
              </p>
              <p className="sec-text mt-15">
                For almost 50 years Leighton Asia, one of the region’s largest
                most respected construction companies been progressively
              </p>
              <div className="about-contact-wrap mt-35">
                <h6 className="about-contact-title">
                  <a href="mailto:daniyel@Karlos.com">Daniyel@Karlos.com</a>
                </h6>
                <h6 className="about-contact-title">
                  <a href="tel:18408412569">+1 840 841 25 69</a>
                </h6>
                <div className="social-btn mt-4">
                  {social_data.map((elm, i) => (
                    <a key={i} href={elm.href} target="_blank">
                      <i className={elm.iconClass}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
