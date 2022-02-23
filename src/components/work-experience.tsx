/* Import ---------------------------------------------------------------------- */ // - x70

import { Timeline } from './timeline'

/* ---------------------------------------------------------------------- */

export const WorkExperience = () => {
  return (
    <section className="container">
      <h2>Works experience</h2>
      <ul>
        <Timeline
          title="农田管家信息技术有限公司 | APP后端研发"
          descriptionArr={[
            '负责农田管家垂直业务相关的后端接口支持, 使用 Go/Python, Thrift 等工具进行微服务的开发与维护;',
            '参与小组内部效率工具开发;',
            '推广&实施工程自动化测试, CI/CD流水线设施;',
          ]}
          data=" 2019/04-2021/01 "
          link="#"
          decoration={true}
          context="experience"
        />
         <Timeline
          title="斯歌信息技术有限公司( K2 BPM)| 后端研发 "
          descriptionArr={[
            'K2bpm 核心系统维护, 客户使用过程中遇到问题及时提供支持;',
            '管理云服务器环境;',
            '自动化脚本和工具开发;',
          ]}
          data=" 2018/03-2019/02 "
          link="#"
          decoration={true}
          context="experience"
        />
         <Timeline
          title="湖北康创软件开发有限公司 | 前端开发 "
          descriptionArr={[
            '电子政务系统',
            '学习了很多 web application 的开发知识',
          ]} 
          data="2015/06-2017/12 "
          link="#"
          decoration={true}
          context="experience"
          last={true}
        />
      </ul>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container ul {
          width: 90%;
        }

        /* Desktop */
        @media (min-width: 450px) {
          .container ul {
            max-width: 80%;
          }
        }
        @media (min-width: 550px) {
          .container ul {
            max-width: 70%;
          }
        }
        @media (min-width: 650px) {
          .container ul {
            max-width: 65%;
          }
        }
        @media (min-width: 750px) {
          .container {
            align-items: flex-start;
          }
          .container ul {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
