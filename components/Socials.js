//  Find other Tailwind CSS social-buttons
//  https://tailwind-elements.com/docs/standard/components/social-buttons/

const Socials = ({ data }) => {
  if (data) {
    var networks = data.social.map(function (network) {
      var pic = '/images/networks/' + network.pic

      return (
        <div key={network.network} className="">
          <a href={network.link} network={network.network}>
            <img alt={network.network} src={pic} className="socialIcon" />
          </a>
        </div>
      )
    })
  }

  return <div className="flex">{networks}</div>
}

export default Socials
