/* Import ---------------------------------------------------------------------- */ // - x70

import { Timeline } from './timeline'

/* ---------------------------------------------------------------------- */

export const ProjectExperience = () => {
  return (
    <div className="container">
      <h2>Project experience</h2>
      <ul>
        <Timeline
          title='"农田管家"农宝服务平台'
          subtitle="主要为第三方农企接入农田管家的公司的飞防业务, 提供无人机作业服务. 并且对这些企业用户提供农产品商城服务、互联网金融服务"
          descriptionArr={[
            '技术涉及 Spring boot, Spring cloud, Gitlab-ci, docker, Redis, RabbitMQ, MySQL, MongoDB',

            '参与后端业务拆分和微服务化转型, 负责基础服务后端开发, 负责实现统一的用户中心模块, 使用 JWT 来做用户令牌,解决鉴权问题, 做到了无状态的身份认证, token 中存入了用户 ID 及权限信息, 判断过程放在了网关 spring cloud gateway 中; 短信, 推送, 短链服务',

            '设计实现代码生成工具, 提高团队的开发效率, 解决代码规范问题; 对于一些通用数据接口重构,如工具类添加重载,去除非业务参数以简化代码等等',

            '实现工程的自动化测试, 优化测试代码的编写体验, 在团队推广 restassured,Mockito/PowerMock 的使用;',

            '部分业务服务后端, 如金融中心模块的开发, 实现农户信贷申请流程。并对接银行接口,提供贷款申请信息;',
          ]}
          data="2019/04-2021/01"
          link="#"
          context="experience"
        />
        <Timeline
          title='"农田管家"数据统计系统'
          subtitle="主要用于对公司业务数据进行统计,以报表或图表的形式在前端做展示。包括飞手活跃度数据、gmv、订单及订单亩次的统计等等"
          descriptionArr={[
            '技术点: Spring boot, MyBatis, Quartz, MySQL, Docker, React, Antd, echarts',

            '负责归纳业务部门提出数据统计需求,解析 binlog, 将已有数据及时输出至统计平台。不存在的数据在业务系统中进行埋点;',

            '管理平台的定时服务,定期向各个业务部门发送业务数据表格;',

            '对后台接口增加监控, 包括故障告警, 慢查询监控, 并进行相应的优化;',
          ]}
          data="2019/10—2020/05"
          link="http://tongji.farmfriend.com.cn/statistics/index.html#/login"
          context="experience"
        />
        <Timeline
          title="通用日志采集服务"
          subtitle="为多个业务服务节点提供日志采集存储, 搜索查看服务, 并且提供日志分析报表"
          descriptionArr={[
            '技术点: kafka, elasticsearch, kibana, etcd, 采用 golang 开发',

            '开发 log agent, 实时抓取日志, 并为每个节点部署',

            '开发 transfer 组件, 从 kafka 读取存储到 es ',
          ]}
          data="2019/10—2019/12"
          link="#"
          context="experience"
        />

        <Timeline
          title="企业 Bpm 开发平台"
          subtitle="将原有.net 平台的 k2 bpm 移植到 java 平台, 微服务下解耦, 以提供更强的扩展能力, 为企业员工提供流程自定义创建,管理,查询平台. "
          descriptionArr={[
            '技术涉及 SSM,SpringCloud, docker, Extjs, Postgres,Redis, RabbitMQ',
            '对应业务功能实现, 如流程发起,暂停,转签,代理等;实现流程自定义, 流程设计, 流程实例管理, 流程审批等功能',

            '针对通用的接口, 做了一些重构工作,如封装 mybatis,提供通用的 dao,分成读写两个接口方便后续实施读写分离 ',

            '从逻辑层熟悉典型业务流程的流转, 编写了多个与流程运转有关的流程处理规则如 precedingRule (前置处理规则), destinationRule(寻找审批人规则), versionSync(版本同步规则)等等;',
          ]}
          data="2018/03-2019/02"
          link="http://www.nebulogy.com/NBS.html"
          context="experience"
        />

        <Timeline
          title="微服务开发运维平台"
          subtitle="帮助企业实现微服务架构, 并提供一系列提高效率的工具;"
          descriptionArr={[
            '技术栈 SpringBoot, SpringCloud, Mybatis, Redis, Rabbitmq, Docker, React, Antd',

            '完成统一的用户中心模块设计实现, 网关鉴权, 接口加密',

            '参与数据对象可视化开发工具的开发, 包括模型设计, 交互页面',

            '微服务开发 SDK',
          ]}
          data="2018/07—2019/02"
          link="http://www.nebulogy.com/NDP.html"
          context="experience"
        />
      </ul>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container ul {
          padding: 0 1rem;
        }

        /* Desktop */
        @media (min-width: 750px) {
          .container {
            align-items: flex-start;
          }
          .container ul {
            padding: 0;
          }
        }
      `}</style>
    </div>
  )
}
