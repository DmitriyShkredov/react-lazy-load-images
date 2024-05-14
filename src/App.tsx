import "./App.css";
import type { FC } from "react";
import { Post } from "./Post/Post";
import image01 from "/images/img-01.jpg";
import image02 from "/images/img-02.jpg";
import image03 from "/images/img-03.jpg";
import image04 from "/images/img-04.jpg";
import image05 from "/images/img-05.jpg";
import image06 from "/images/img-06.jpg";
import image07 from "/images/img-07.jpg";
import image01Min from "/images/img-01-min.jpg";
import image02Min from "/images/img-02-min.jpg";
import image03Min from "/images/img-03-min.jpg";
import image04Min from "/images/img-04-min.jpg";
import image05Min from "/images/img-05-min.jpg";
import image06Min from "/images/img-06-min.jpg";
import image07Min from "/images/img-07-min.jpg";

export const App: FC = () => {
  return (
    <section className="posts">
      <Post
        image={{
          src: image01,
          minsrc: image01Min,
          width: 1024,
          height: 593,
        }}
        title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, velit?"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit possimus veniam distinctio tempora similique quasi animi nam, consequuntur voluptas magnam blanditiis explicabo unde tempore laboriosam sunt dolorum et mollitia, soluta accusantium asperiores perspiciatis magni libero! Numquam veritatis quia minima provident vero voluptas explicabo, soluta consectetur dolor labore repellat nostrum sequi!"
      />
      <Post
        image={{
          src: image02,
          minsrc: image02Min,
          width: 1024,
          height: 593,
        }}
        title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, velit?"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit possimus veniam distinctio tempora similique quasi animi nam, consequuntur voluptas magnam blanditiis explicabo unde tempore laboriosam sunt dolorum et mollitia, soluta accusantium asperiores perspiciatis magni libero! Numquam veritatis quia minima provident vero voluptas explicabo, soluta consectetur dolor labore repellat nostrum sequi!"
      />
      <Post
        image={{
          src: image03,
          minsrc: image03Min,
          width: 1024,
          height: 689,
        }}
        title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, velit?"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit possimus veniam distinctio tempora similique quasi animi nam, consequuntur voluptas magnam blanditiis explicabo unde tempore laboriosam sunt dolorum et mollitia, soluta accusantium asperiores perspiciatis magni libero! Numquam veritatis quia minima provident vero voluptas explicabo, soluta consectetur dolor labore repellat nostrum sequi!"
      />
      <Post
        image={{
          src: image04,
          minsrc: image04Min,
          width: 1024,
          height: 593,
        }}
        title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, velit?"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit possimus veniam distinctio tempora similique quasi animi nam, consequuntur voluptas magnam blanditiis explicabo unde tempore laboriosam sunt dolorum et mollitia, soluta accusantium asperiores perspiciatis magni libero! Numquam veritatis quia minima provident vero voluptas explicabo, soluta consectetur dolor labore repellat nostrum sequi!"
      />
      <Post
        image={{
          src: image05,
          minsrc: image05Min,
          width: 1024,
          height: 593,
        }}
        title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, velit?"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit possimus veniam distinctio tempora similique quasi animi nam, consequuntur voluptas magnam blanditiis explicabo unde tempore laboriosam sunt dolorum et mollitia, soluta accusantium asperiores perspiciatis magni libero! Numquam veritatis quia minima provident vero voluptas explicabo, soluta consectetur dolor labore repellat nostrum sequi!"
      />
      <Post
        image={{
          src: image06,
          minsrc: image06Min,
          width: 1024,
          height: 801,
        }}
        title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, velit?"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit possimus veniam distinctio tempora similique quasi animi nam, consequuntur voluptas magnam blanditiis explicabo unde tempore laboriosam sunt dolorum et mollitia, soluta accusantium asperiores perspiciatis magni libero! Numquam veritatis quia minima provident vero voluptas explicabo, soluta consectetur dolor labore repellat nostrum sequi!"
      />
      <Post
        image={{
          src: image07,
          minsrc: image07Min,
          width: 1024,
          height: 689,
        }}
        title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, velit?"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit possimus veniam distinctio tempora similique quasi animi nam, consequuntur voluptas magnam blanditiis explicabo unde tempore laboriosam sunt dolorum et mollitia, soluta accusantium asperiores perspiciatis magni libero! Numquam veritatis quia minima provident vero voluptas explicabo, soluta consectetur dolor labore repellat nostrum sequi!"
      />
    </section>
  );
};
