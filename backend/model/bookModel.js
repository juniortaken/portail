// models/Notice.js
import { DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('c1pmb', 'root', 'wcl@2065@GOAL', {
  host: 'localhost',
  dialect: 'mariadb', // or 'mysql' for MySQL
});

const Book = sequelize.define('Notice', {
  notice_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  typdoc: {
    type: DataTypes.STRING,
  },
  tit1: {
    type: DataTypes.STRING,
  },
  tit2: {
    type: DataTypes.STRING,
  },
  tit3: {
    type: DataTypes.STRING,
  },
  tit4: {
    type: DataTypes.STRING,
  },
  tparent_id: {
    type: DataTypes.INTEGER,
  },
  tnvol: {
    type: DataTypes.STRING,
  },
  ed1_id: {
    type: DataTypes.INTEGER,
  },
  ed2_id: {
    type: DataTypes.INTEGER,
  },
  coll_id: {
    type: DataTypes.INTEGER,
  },
  subcoll_id: {
    type: DataTypes.INTEGER,
  },
  year: {
    type: DataTypes.INTEGER,
  },
  nocoll: {
    type: DataTypes.STRING,
  },
  mention_edition: {
    type: DataTypes.STRING,
  },
  code: {
    type: DataTypes.STRING,
  },
  npages: {
    type: DataTypes.INTEGER,
  },
  ill: {
    type: DataTypes.STRING,
  },
  size: {
    type: DataTypes.STRING,
  },
  accomp: {
    type: DataTypes.STRING,
  },
  n_gen: {
    type: DataTypes.STRING,
  },
  n_contenu: {
    type: DataTypes.STRING,
  },
  n_resume: {
    type: DataTypes.STRING,
  },
  lien: {
    type: DataTypes.STRING,
  },
  eformat: {
    type: DataTypes.STRING,
  },
  index_l: {
    type: DataTypes.STRING,
  },
  indexint: {
    type: DataTypes.STRING,
  },
  index_serie: {
    type: DataTypes.STRING,
  },
  index_matieres: {
    type: DataTypes.STRING,
  },
  niveau_biblio: {
    type: DataTypes.STRING,
  },
  niveau_hierar: {
    type: DataTypes.STRING,
  },
  origine_catalogage: {
    type: DataTypes.STRING,
  },
  prix: {
    type: DataTypes.FLOAT,
  },
  index_n_gen: {
    type: DataTypes.STRING,
  },
  index_n_contenu: {
    type: DataTypes.STRING,
  },
  index_n_resume: {
    type: DataTypes.STRING,
  },
  index_sew: {
    type: DataTypes.STRING,
  },
  index_wew: {
    type: DataTypes.STRING,
  },
  statut: {
    type: DataTypes.STRING,
  },
  commentaire_gestion: {
    type: DataTypes.STRING,
  },
  create_date: {
    type: DataTypes.DATE,
  },
  update_date: {
    type: DataTypes.DATE,
  },
  signature: {
    type: DataTypes.STRING,
  },
  thumbnail_url: {
    type: DataTypes.STRING,
  },
  date_parution: {
    type: DataTypes.DATE,
  },
  opac_visible_bulletinage: {
    type: DataTypes.BOOLEAN,
  },
  indexation_lang: {
    type: DataTypes.STRING,
  },
  map_echelle_num: {
    type: DataTypes.STRING,
  },
  map_projection_num: {
    type: DataTypes.STRING,
  },
  map_ref_num: {
    type: DataTypes.STRING,
  },
  notice_is_new: {
    type: DataTypes.BOOLEAN,
  },
  notice_date_is_new: {
    type: DataTypes.BOOLEAN,
  },
  opac_serialcirc_demande: {
    type: DataTypes.BOOLEAN,
  },
  num_notice_usage: {
    type: DataTypes.INTEGER,
  },
  is_numeric: {
    type: DataTypes.BOOLEAN,
  },
});

export default Book;
