import './Avatar.css';

function Avatar({src, alt, size}) {
  return (
    <div className="avatar" style={{width: size, height: size}}>
      <img src={src} alt={alt ? 'Photo of ' + alt : ''}></img>
    </div>
  );
}

export default Avatar;
