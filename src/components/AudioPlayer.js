import { useContext, useEffect, useState } from "react";
import Styles from './Header.module.css'
import { useAudioPlayer } from "react-use-audio-player";

import loadingImage from '../util/Images/loading.gif';
import crankyChair  from '../util/Images/crankyChair.gif';
import crankyPlaying from '../util/Images/crankyPlay.gif';
import MyContext from "../context/MyContext";

function AudioPlayer({file}) {

  const {playing, setPlaying} = useContext(MyContext);

  const [click, setClick] = useState(true)
  const [loading, setLoading] = useState(false)

  const { togglePlayPause, volume } = useAudioPlayer({
    autoplay: false,
    src: file,
    format: 'mp3',
    loop: true,
  });

  useEffect(() => {
    setTimeout(() =>{
      setClick(false)
    }, 2000)
  },[])

  useEffect(() => {
    volume(0.1);
  }, [volume])

  const onLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },300 )
  }

  return (
    <div>
        {loading ? (
        <img src={loadingImage} className={Styles.headerImg} alt="" />
      ) : (
        <div>
          <input className={Styles.headerImg} onClick={() => {togglePlayPause(); setPlaying(!playing); onLoad()}} type="image" title="Click me" src={!playing ? crankyChair : crankyPlaying} alt="" />
          {/* {click && !playing && <span>Click Me</span>} */}
        </div>
      )}
    </div>
  )

}

export default AudioPlayer;
