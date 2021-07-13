import Styles from './ProjectCard.module.scss';
import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import ModalCard from './ModalCard';

function ProjectCard ({data}) {
  const [modalIsOpen, setIsOpen ] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div className={Styles.CardContainer}>
      <h3>{data.name}</h3>
      <img src={data.image} alt={data.name} />
      <button type="button" onClick={() => setIsOpen(true) } >Ver detalhes</button>
      <Modal
        open={modalIsOpen}
        onClose={handleClose}
        className={Styles.modal}
      >
        <ModalCard close={setIsOpen} projectData={data} />
      </Modal>

    </div>
  )
}

export default ProjectCard;
