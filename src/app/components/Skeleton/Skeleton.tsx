import "./Skeleton.scss";

interface SkeletonProps {
  width: string;
  height: string;
}

export default function Skeleton(props: SkeletonProps) {
  return (
    <div
      className="skeleton"
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
    ></div>
  );
}
