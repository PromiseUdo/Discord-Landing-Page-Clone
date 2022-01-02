import mainsvg1 from '../../assets/images/mainsvg1.svg'
import mainsvg2 from '../../assets/images/mainsvg2.svg'
import mainsvg3 from '../../assets/images/mainsvg3.svg'
import mainsvg4 from '../../assets/images/mainsvg4.svg'

export const data = [
  {
    id: 1,
    headline: 'Create an invite-only place where you belong',
    desc: 'Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.',
    img: mainsvg1,
    imgAlt:
      'Stylized image of a Discord server with multiple channels for studying, games, cooking, and pet photos.',
    imgStart: true,
    greyBackground: false,
  },
  {
    id: 2,
    headline: 'Where hanging out is easy',
    desc: "Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having a call.",
    img: mainsvg2,
    imgAlt:
      'Stylized image showing friends hanging out in multiple voice channels.',
    imgStart: false,
    greyBackground: true,
  },
  {
    id: 3,
    headline: 'From few to a fandom',
    desc: 'Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.',
    img: mainsvg3,
    imgAlt:
      'Stylized image showing friends in a server organized into roles for Coach, Student Lead, and Animal Crossing.',
    imgStart: true,
    greyBackground: false,
  },
  {
    id: 4,
    headline: 'Reliable tech for staying close',
    desc: "Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share",
    img: mainsvg4,
    imgAlt: 'Stylized image of screen share.',
    greyBackground: true,
    layout: 'column',
  },
]
