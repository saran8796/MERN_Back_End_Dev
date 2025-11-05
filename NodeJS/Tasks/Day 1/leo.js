const leo = (charA, charB, charC, charD) => {
  return `\n\nMovie Leo: \n\n ${charA} (Thalapathy Vijay) lives as ${charB}, a peaceful café owner in Himachal Pradesh, hiding from his dark past as a ruthless gangster and drug-lord. He tries to keep his family safe, but trouble finds him when old enemies, led by ${charC} and ${charD}, come searching for ${charA}.\n\n`;
};

const scene1 = (charA, charB) => {
  return `Scene1: \n\nI have done nothing good to be remembered as ${charA} and that anyone who knows my identity must die or already be dead, recalling that he admitted the truth to ${charB} before killing him.\n\n`;
};

const scene2 = (charA) => {
  return `Scene2: \n\nThe caller says he knows ${charA}’s true identity and contends that destroying his family's factory will not make society drug-free, imploring him to join his mission and correctly surmising that ${charA} might have recognized him by now.\n\n`;
};

const scene3 = (charA, charB, charC) => {
  return `Scene3: \n\nAfter killing ${charC}, ${charA}/${charB} sets fire to the Das & Co factory, erasing all traces of his criminal past. He declares: \n I've done nothing good to be remembered as ${charA}. Anyone who knows my real identity must be dead or will die by my hands. My life is now to protect my family, not live as ${charA} anymore.\n\n`;
};

export default leo;

export { scene1, scene2, scene3 };
